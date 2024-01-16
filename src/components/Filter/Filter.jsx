const Filter = ({value, onChange}) => (
    <div><p>Find contacts by name</p> <input type="text" onChange={onChange} value={value}/>
    </div>
)


export default Filter;