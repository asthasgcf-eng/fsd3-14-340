const products=[{
    title:"Apple", id:1, isFruit:true},
    {title:"Cabbage", id:2, isFruit:false},
    {title:"Banana", id:3, isFruit:true},
    {title:"Carrot", id:4, isFruit:false}
];

const ListItem=products.map((item)=>(
    <li key={item.id} style={{color:item.isFruit ? "red" : "green"}}>
    {item.title}</li>
));

console.log(ListItem);

const Fruits=()=>{
    return <ul>
        {ListItem}
    </ul>;
    
};

export default Fruits;