using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Data.SqlTypes;

namespace Domain
{
    public class Documents
    {

        [Key]
        public int Id_documento{ get; set; }

        public int Id_proveedor { get; set; }

        public int Id_tipo_documento{ get; set; }

        public string Letra_documento{ get; set; }

        public Decimal Prefijo_documento{ get; set; }

        public Decimal Numero_documento{ get; set; }

        public DateTime Fecha_documento{ get; set; }

        public Decimal Monto{ get; set; }

        public int Nota_pedido{ get; set; }

        public int Id_estado { get; set; }

        public DateTime Fecha_actualizacion { get; set; }



        public Documents() {

            

        }

    }
}
