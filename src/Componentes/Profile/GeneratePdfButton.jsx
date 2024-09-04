import React from "react";
import jsPDF from "jspdf";
import Agenda from "../../assets/agenda.png";
import Maletin from "../../assets/maletin.png";
import Estudio from "../../assets/estudio.png";

const GeneratePdfButton = ({
  user,
  nombre,
  telefono,
  email,
  dni,
  fechaNac,
  distrito,
  experiences,
  gradoAcademico,
  institucion,
  ultimoAnioEstudio,
}) => {
  const generatePdf = async () => {
    const doc = new jsPDF();

    try {
      if (user.user_metadata.avatar_url) {
        const response = await fetch(user.user_metadata.avatar_url);
        if (!response.ok) throw new Error("Image failed to load");
        const blob = await response.blob();
        const reader = new FileReader();

        reader.onloadend = () => {
          try {
            const base64data = reader.result;

            doc.setFillColor(255, 255, 255);
            doc.setDrawColor(0, 0, 0);
            doc.circle(30, 40, 20, "FD");
            doc.addImage(base64data, "PNG", 10, 20, 40, 40, undefined, "FAST");

            doc.setFontSize(22);
            doc.setFont("helvetica", "bold");
            doc.setTextColor(85, 85, 85);
            doc.text(nombre, 60, 40);

            const agendaImg = new Image();
            agendaImg.src = Agenda;
            doc.addImage(agendaImg, "PNG", 10, 75, 10, 10);

            doc.setFontSize(14);
            doc.setFont("helvetica", "bold");
            doc.setTextColor(85, 85, 85);
            doc.text("CONTACTO:", 25, 80);

            doc.setFontSize(12);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(64, 64, 64);
            doc.text(`Teléfono: ${telefono}`, 25, 90);
            doc.text(`Email: ${email}`, 25, 98);
            doc.text(`DNI: ${dni}`, 25, 106);
            doc.text(`Fecha de Nacimiento: ${fechaNac}`, 25, 114);
            doc.text(`Distrito: ${distrito}`, 25, 122);

            const estudioImg = new Image();
            estudioImg.src = Estudio;
            doc.addImage(estudioImg, "PNG", 10, 135, 10, 10);

            doc.setFontSize(14);
            doc.setFont("helvetica", "bold");
            doc.setTextColor(85, 85, 85);
            doc.text("GRADO ACADÉMICO:", 25, 140);

            doc.setFontSize(12);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(64, 64, 64);
            doc.text(`Grado Académico: ${gradoAcademico || "N/A"}`, 25, 150);
            doc.text(`Institución: ${institucion || "N/A"}`, 25, 158);
            doc.text(`Último Año de Estudio: ${ultimoAnioEstudio || "N/A"}`, 25, 166);

            const maletinImg = new Image();
            maletinImg.src = Maletin;

            // Add more space before starting the experience section
            doc.addImage(maletinImg, "PNG", 10, 185, 10, 10);

            doc.setFontSize(14);
            doc.setFont("helvetica", "bold");
            doc.setTextColor(85, 85, 85);
            doc.text("EXPERIENCIA LABORAL:", 25, 190);

            doc.setFontSize(12);
            doc.setFont("helvetica", "normal");
            doc.setTextColor(64, 64, 64);
            let yOffset = 200; // Increased yOffset for more space

            experiences.forEach((exp, index) => {
              doc.text(`${index + 1}. Cargo: ${exp.cargo}`, 25, yOffset);
              yOffset += 8;
              doc.text(`   Empresa: ${exp.empresa}`, 25, yOffset);
              yOffset += 8;
              doc.text(`   Tiempo: ${exp.tiempo}`, 25, yOffset);
              yOffset += 8;
              doc.text(`   Función: ${exp.funcion}`, 25, yOffset);
              yOffset += 12;
            });

            doc.save("cv.pdf");
          } catch (error) {
            console.error("Error generating PDF:", error);
          }
        };

        reader.readAsDataURL(blob);
      }
    } catch (error) {
      console.error("Error loading image:", error);
    }
  };

  return (
    <button
      className="bg-primarycolor text-white text-lg px-4 py-2 rounded-full"
      onClick={generatePdf}
    >
      Genera tu CV
    </button>
  );
};

export default GeneratePdfButton;