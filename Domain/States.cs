using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using static System.Net.Mime.MediaTypeNames;

namespace Domain
{
    public class States
    {

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key, Column(Order = 0)]
        public int Id_estado { get; set; }

        public int Id_tipo_estado { get; set; }

        public string Descripcion_abreviada { get; set; }

        public string Descripcion{ get; set; }

        
      
        public States()
        {

            

        }

    }
}
