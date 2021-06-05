using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Domain
{
    public class PaymentsForms
    {

        [Key]
        public int Id_pagos_formas{ get; set; }

        public int Id_pago { get; set; }

        public string Descripcion { get; set; }

        public string Numero{ get; set; }

        public decimal Importe { get; set; }

        public DateTime Fecha_emision { get; set; }

        public DateTime Fecha_pago { get; set; }

        public string Imagen { get; set; }

        public PaymentsForms() {

        }

    }
}
