using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using static System.Net.Mime.MediaTypeNames;

namespace Domain
{
    public class DigitalDocuments
    {

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key, Column(Order = 0)]
        public int Id_documento { get; set; }

        public int Id_usuario_carga { get; set; }

        public int Id_rechazo{ get; set; }

        public string Nombre_archivo { get; set; }

        public int Cuit { get; set; }

        public string Tipo_archivo { get; set; }

        public int Id_estado { get; set; }

        public string Fecha_carga { get; set; }

        public string Hora_carga { get; set; }

        public string Fecha_estado { get; set; }

        public int Tamano_archivo { get; set; }

        public string Imagen { get; set; }

        public DigitalDocuments(string img, int id, object name, object date, object type, int size) {

            this.Nombre_archivo = name.ToString();
            this.Tipo_archivo = type.ToString();
            this.Id_usuario_carga = id;
            this.Imagen = img;
            this.Id_estado = 1;
            this.Tamano_archivo = size;
            this.Fecha_carga = DateTime.Now.ToString("yyyy/MM/dd");
            this.Hora_carga = DateTime.Now.ToString("h:mm:ss tt");

        }

        public DigitalDocuments()
        {

            this.Fecha_carga = DateTime.Now.ToString();

        }

    }
}
