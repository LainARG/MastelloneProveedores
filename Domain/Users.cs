using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain
{
    public class Users
    {

        [Key]
        public int Id_usuario { get; set; }
        public Int16 Tipo{ get; set; }

        public string Mail { get; set; }

        public DateTime Fecha_registro { get; set; }

        public DateTime Fecha_ult_ingreso { get; set; }

        [ForeignKey("Id_usuario")]
        public ICollection<UsersAssignment> UsersAssignments { get; set; }


        public Users() {

            this.Fecha_registro = DateTime.Now;

        }

    }
}
