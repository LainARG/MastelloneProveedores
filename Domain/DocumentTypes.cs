using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.SqlTypes;

namespace Domain
{
    public class DocumentTypes
    {

        [Key]
        public int Id_tipo_documento{ get; set; }

        public string Codigo_documento { get; set; }

        public string Descripcion_abreviada{ get; set; }

        public string Descripcion{ get; set; }

        public int Signo { get; set; }



        public DocumentTypes(){}

    }
}
