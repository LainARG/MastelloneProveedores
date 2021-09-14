using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.SqlTypes;

namespace Domain
{
    public class Notices
    {

        [Key]
        public int Id_usuario{ get; set; }

        public string Tipo { get; set; }

        public DateTime Fecha_aviso{ get; set; }

        public string Titulo_aviso{ get; set; }

        public string Cuerpo_aviso{ get; set; }

        public int Id_area{ get; set; }

        public string Destino{ get; set; }

        public string Enviado{ get; set; }

        public string Recibido{ get; set; }

        public string Periodo_vigencia { get; set; }

        public string Destacado { get; set; }

        public string Conformidad { get; set; }

        public int Id_documento_conformidad { get; set; }



        public Notices() {

            

        }

    }
}
