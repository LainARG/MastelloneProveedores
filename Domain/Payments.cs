using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class Payments
    {

        [Key]
        public int Id_pago { get; set; }

        public int Id_proveedor{ get; set; }

        public int Id_estado { get; set; }

        public Decimal Prefijo_pago { get; set; }

        public Decimal Numero_pago { get; set; }

        public Decimal Total_pago { get; set; }

        public DateTime Fecha_disponible { get; set; }

        public string Lugar_retiro { get; set; }


        public Payments() {

            

        }

    }
}
