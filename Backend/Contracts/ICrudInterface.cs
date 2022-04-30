
namespace Contracts
{
    public interface ICrudInterface<TModel> where TModel : class
    {
        IEnumerable<TModel> Get();
        TModel GetById(long id);
        TModel Add(TModel newModel);
        TModel Update(long id, TModel newModelData);
        TModel Delete(int id);
    }
}
