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
    public class DigitalDocumentsRepository : BaseRepository, IDigitalDocumentsRepository
    {
        public DigitalDocumentsRepository(MastelloneDBContext dbContext) : base(dbContext)
        {

        }

        public IEnumerable<DigitalDocuments> GetAll()
        {

            return _dbContext.Documentos_electronicos;

        }

        public void saveDigitalDocument(List<DigitalDocumentDTO> files)
        {

            for (int i=0; i<files.Count; i++) {
                DigitalDocuments digDoc = new DigitalDocuments(files[i].img, files[i].id, files[i].name, files[i].date, files[i].type, files[i].size);

                _dbContext.Documentos_electronicos.Add(digDoc);
            }

            _dbContext.SaveChanges();
        }


    }
}