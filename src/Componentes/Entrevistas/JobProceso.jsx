import React, { useEffect, useState, useContext } from 'react';
import { supabase } from '../../supabase/supabase.config';
import { Link } from 'react-router-dom';
import { FaBriefcase, FaClock, FaDollarSign } from 'react-icons/fa';
import { UserAuth } from '../../Context/AuthContext';
import JobsContext from '../../Context/JobsContext';
import { Card, CardContent, CardActions, Button, Typography, Avatar, CircularProgress, Chip } from '@mui/material';

const formatDate = (isoString) => {
  const date = new Date(isoString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const JobProceso = () => {
  const { user } = UserAuth();
  const { searchTerm } = useContext(JobsContext);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      if (user) {
        const { data: profileData, error: profileError } = await supabase
          .from('perfiles')
          .select('id')
          .eq('id', user.id)
          .single();

        if (profileError) {
          console.error('Error fetching profile:', profileError);
          return;
        }

        const idReclutador = profileData.id;

        const { data: jobsData, error: jobsError } = await supabase
          .from('Oferta')
          .select('*')
          .eq('id_reclutador', idReclutador);

        if (jobsError) {
          console.error('Error fetching jobs:', jobsError);
        } else {
          const sortedJobs = jobsData.sort((a, b) => new Date(b.fecha_publicacion) - new Date(a.fecha_publicacion));
          setJobs(sortedJobs);
        }
        setLoading(false);
      }
    };

    fetchJobs();
  }, [user]);

  const filteredJobs = jobs.filter((job) =>
    job.puesto.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <div className="w-full max-w-3/4 bg-transparent px-6 rounded-lg font-dmsans">
      <Typography variant="h6" className="mb-4">
        We've found {filteredJobs.length} jobs!
      </Typography>
      <div className="flex flex-col gap-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <Card key={job.id_oferta} variant="outlined" className="flex items-center p-4">
              <Avatar src={job.empresa_img_url} alt="profile" className="w-16 h-16 mr-4" />
              <CardContent className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <Typography variant="h6">{job.puesto}</Typography>
                </div>
                <Typography variant="body2" color="textSecondary">
                  {job.ubicacion}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {job.modalidad}
                </Typography>
                <Typography variant="body2" color="textSecondary" className="flex items-center gap-2 mt-1">
                  <FaDollarSign />
                  {job.sueldo}
                </Typography>
                <Typography variant="body2" color="textSecondary" className="mt-1">
                  Posted on: {formatDate(job.fecha_publicacion)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" component={Link} to={`/Entrevistas/${job.id_oferta}`}>
                  Details
                </Button>
              </CardActions>
            </Card>
          ))
        ) : (
          <Typography className="text-center text-gray-600">No jobs found</Typography>
        )}
      </div>
    </div>
  );
};

export default JobProceso;