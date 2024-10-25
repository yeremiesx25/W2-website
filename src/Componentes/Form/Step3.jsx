import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import ShareModal from "./ShareModal";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import {
  Box,
  TextField,
  Button,
  Input,
  Typography,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";

const Step3 = ({ data, handleChange, prevStep, onSubmit }) => {
  const [recruiterNumber, setRecruiterNumber] = useState("");
  const [questions, setQuestions] = useState([""]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [updatedData, setUpdatedData] = useState(null);

  const handleRecruiterNumberChange = (e) => setRecruiterNumber(e.target.value);

  const handleQuestionChange = (index, e) => {
    const newQuestions = [...questions];
    newQuestions[index] = e.target.value;
    setQuestions(newQuestions);
  };

  const addQuestion = () => {
    if (questions.length < 6) {
      setQuestions([...questions, ""]);
    }
  };

  const removeQuestion = (index) => {
    const newQuestions = questions.filter((_, i) => i !== index);
    setQuestions(newQuestions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const wtspUrl = `https://wa.me/${recruiterNumber}?text=Hola,%20estoy%20interesado%20en%20el%20puesto%20de%20${encodeURIComponent(
      data.puesto
    )};`;
    const newData = {
      ...data,
      wtsp_url: wtspUrl,
      preg_1: questions[0] || "",
      preg_2: questions[1] || "",
      preg_3: questions[2] || "",
      preg_4: questions[3] || "",
      preg_5: questions[4] || "",
      preg_6: questions[5] || "",
    };
    setUpdatedData(newData);
    setModalOpen(true);
    onSubmit(newData);
  };

  return (
    <Box
      fullWidth
      sx={{
        maxWidth: 600,
        minWidth: 600,
        mx: "auto",
        mt: 0,
        p: 3,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      

      {/* Modalidad */}
      <Box mb={3}>
        <Typography variant="body1" gutterBottom>
          Modalidad
        </Typography>
        <Select
          name="modalidad"
          value={data.modalidad}
          onChange={handleChange}
          fullWidth
          required
        >
          <MenuItem value="">Selecciona una modalidad</MenuItem>
          <MenuItem value="Presencial">Presencial</MenuItem>
          <MenuItem value="Remoto">Remoto</MenuItem>
          <MenuItem value="Híbrido">Híbrido</MenuItem>
        </Select>
      </Box>

      {/* Horario */}
        <TextField
            label="Horario"
            variant="outlined"
            name="horario"
            value={data.horario}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
        />
      {/* Número de Reclutador */}
      <TextField
        label="Número de Reclutador"
        variant="outlined"
        name="recruiterNumber"
        value={recruiterNumber}
        onChange={handleRecruiterNumberChange}
        fullWidth
        required
        margin="normal"
      />
      <Box mb={3}>
      <Typography variant="body1" gutterBottom>
        Imagen de la empresa
      </Typography>
      <label htmlFor="upload-image">
        <Input
          id="upload-image"
          type="file"
          accept="image/*"
          onChange={handleChange}
          style={{ display: 'none' }}
        />
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="span"
          sx={{ width: '100%', height: 'auto', border: '1px solid #ccc', padding: '16px', borderRadius: '4px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <PhotoCamera fontSize="large" />
        </IconButton>
      </label>
    </Box>
      {/* Preguntas para el Postulante */}
      <Box mb={3}>
        <Typography variant="body1" gutterBottom>
          Preguntas para el Postulante
        </Typography>
        {questions.map((question, index) => (
          <Box key={index} display="flex" alignItems="center" mb={2}>
            <TextField
              value={question}
              onChange={(e) => handleQuestionChange(index, e)}
              fullWidth
              placeholder={`Pregunta ${index + 1}`}
              required={index === 0}
              variant="outlined"
              margin="normal"
            />
            {index === questions.length - 1 && questions.length < 6 && (
              <IconButton color="primary" onClick={addQuestion}>
                <IoMdAdd />
              </IconButton>
            )}
            {index > 0 && (
              <IconButton
                color="secondary"
                onClick={() => removeQuestion(index)}
              >
                <MdDeleteForever />
              </IconButton>
            )}
          </Box>
        ))}
      </Box>

      {/* Botones de navegación */}
      <Box display="flex" justifyContent="space-between" mt={3}>
        <Button variant="contained" color="secondary" onClick={prevStep}>
          Anterior
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Enviar
        </Button>
      </Box>

      {/* Modal */}
      {isModalOpen && updatedData && (
        <ShareModal
          selectedJob={updatedData}
          onClose={() => setModalOpen(false)}
        />
      )}
    </Box>
  );
};

export default Step3;
