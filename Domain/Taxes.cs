using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class Taxes
    {

        [Key]
        public int Id_impuesto { get; set; }

        public string Concepto { get; set; }

        public string Codigo_concepto{ get; set; }

        public string Numero_pago { get; set; }

        public string Tipo_impuesto { get; set; }

        public DateTime Fecha_pago{ get; set; }
       

        public Taxes() {

            

        }

    }
}
