using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
