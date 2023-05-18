
export default function Child({val1, val2, funk})
{
   function Math(event)
    {
        
        switch(event.target.value)
        {
        case "add": 
            let sum1 = val1 + val2
            funk(sum1)
            break;
        case "pow":
            let sum2 =val1**val2
            funk(sum2)
            break;
        default:
            break;
        }
    }

    return <div align="center">
        <select onClick={Math}>
            <option value="add">add</option>
            <option value="pow">pow</option>
        </select>
    </div>
}
