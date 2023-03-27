const names = ['Brian', 'Erica', 'Grant'];

function List() {
    const listnames = names.map(name => 
        <li>
            {name}
        </li>
    )

  return (
    <ul>{listnames}</ul>
  )
}

export default List