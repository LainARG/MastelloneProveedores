using Domain;
using Microsoft.EntityFrameworkCore;
using Repository.Interfaces;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Reflection;
using System.Text;
using static System.Net.Mime.MediaTypeNames;

namespace Repository.Repository
{
    public class DigitalDocumentsRejectedRepository : BaseRepository, IDigitalDocumentsRejectedRepository
    {
        public DigitalDocumentsRejectedRepository(MastelloneDBContext dbContext) : base(dbContext)
        {

        }

        public IEnumerable<DigitalDocumentsRejected> GetAll()
        {

            return _dbContext.Documentos_electronicos_rechazos;

        }

          public void saveDigitalDocumentRejected(List<DigitalDocumentRejectedDTO> files)
        {

             for (int i=0; i<files.Count; i++) {
                DigitalDocumentsRejected digDoc = new DigitalDocumentsRejected(files[i].Codigo_motivo_rechazo, files[i].Id_documento_electronico, files[i].Observaciones, files[i].Mail_informacion_rechazo, files[i].Fecha_rechazo, files[i].Usuario_rechazo);

               _dbContext.Documentos_electronicos_rechazos.Add(digDoc);
            }

             _dbContext.SaveChanges();

        }


    }
}