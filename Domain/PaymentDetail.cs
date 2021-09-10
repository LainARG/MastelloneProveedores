using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Domain
{
    public class PaymentDetail
    {
        [Key]
        public int Id_pagos_detalle { get; set; }

        public int Id_pago { get; set; }

        public int Id_documento { get; set; }

        public decimal Monto_pagado_documento { get; set; }

        public PaymentDetail()
        {

        }
    }

   
}
