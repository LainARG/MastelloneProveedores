namespace Repository
{
    public class BaseRepository
{
        protected readonly MastelloneDBContext _dbContext;
        public BaseRepository(MastelloneDBContext dbContext)
        {
            _dbContext = dbContext;
        }
    }
}
