using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using static System.Net.Mime.MediaTypeNames;

namespace Domain
{
    public class DigitalDocumentsRejected
    {

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key, Column(Order = 0)]
        public int Id_rechazo { get; set; }
        public int Codigo_motivo_rechazo { get; set; }
        public int Id_documento_electronico { get; set; }
        public string Observaciones { get; set; }
        public string Mail_informacion_rechazo { get; set; }
        public string Fecha_rechazo { get; set; }
        public string Usuario_rechazo { get; set; }
        

        public DigitalDocumentsRejected(int codigo_motivo_rechazo, int id_documento_electronico, string observaciones, string mail_informacion_rechazo, string fecha_rechazo, string usuario_rechazo)
        {
            this.Codigo_motivo_rechazo = codigo_motivo_rechazo;
            this.Id_documento_electronico = id_documento_electronico;
            this.Observaciones = observaciones;
            this.Mail_informacion_rechazo = mail_informacion_rechazo;
            this.Fecha_rechazo = fecha_rechazo;
            this.Usuario_rechazo = usuario_rechazo;
        }

        public DigitalDocumentsRejected()
        {

        }

    }
}
