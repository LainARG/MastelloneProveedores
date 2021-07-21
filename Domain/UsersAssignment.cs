using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using static System.Net.Mime.MediaTypeNames;

namespace Domain
{
    public class UsersAssignment
    {

        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key, Column(Order = 0)]
        public int Id_usuario { get; set; }
        public Users Users { get; set; }

        public int Id_proveedor{ get; set; }
        public Providers Providers { get; set; }

        public UsersAssignment(int id_usuario, int id_proveedor) {

            this.Id_usuario = id_usuario;
            this.Id_proveedor = id_proveedor;
        }


    }
}
