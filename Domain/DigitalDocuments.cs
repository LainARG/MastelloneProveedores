using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class DigitalDocuments
    {

        [Key]
        public int Id_documento { get; set; }

        public string Nombre_archivo { get; set; }

        public string Estado{ get; set; }

        public string Tipo { get; set; }

        public string Observaciones { get; set; }

        public string Numero_documento { get; set; }

        public int Id_usuario_carga { get; set; }

        public DateTime Fecha_de_carga{ get; set; }

        public DateTime Fecha_ult_modificacion { get; set; }

        public DigitalDocuments() {

            this.Fecha_de_carga = DateTime.Now;

        }

    }
}
