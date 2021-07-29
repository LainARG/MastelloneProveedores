using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.SqlTypes;

namespace Domain
{
    public class DocumentsReasonRejection
    {

        [Key]
        public int Codigo_motivo_rechazo{ get; set; }

        public string Descripcion_rechazo { get; set; }





        public DocumentsReasonRejection() {


        }

    }
}
