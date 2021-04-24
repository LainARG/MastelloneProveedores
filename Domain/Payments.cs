using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class Payments
    {

        [Key]
        public int Id_pago { get; set; }

        public string Tipo_pago { get; set; }

        public string Estado_pago { get; set; }

        public DateTime Fecha_pago_retiro{ get; set; }

        public string Numero_pago { get; set; }

        public string Direccion_retiro { get; set; }

        public double Monto_bruto { get; set; }

        public string Observaciones_pago { get; set; }

        public int Id_factura { get; set; }

        public int Id_proveedor { get; set; }

        public int Id_documento { get; set; }

        public Payments() {

            

        }

    }
}
