using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Domain
{
    public class Visits
    {
        [Key]
        public int id_visita { get; set; }

        public int id_usuario { get; set; }

        public string tipo_usuario { get; set; }

        public DateTime fecha_visita { get; set; }

        public int id_seccion { get; set; }

        public Visits()
        {
        }

    }
}
