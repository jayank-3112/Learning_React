// const MyHeading = (props) => {
const MyHeading = ({ name, text, price }) => {
    // const a = props.text;
    const t = text;
    const obj = { firstname: "Jayank", age: 21 };

    //destructuring
    const { firstname, age } = obj;
    return (
        <>
            <h1>{name}</h1>
            <h2>{t}</h2>
            <MyHeading2 value = {price} />
            {/* <h3>{obj.name},{obj.age}</h3> */}
            <h3>{firstname},{age}</h3>
        </>
    );
}
const MyHeading2 = ({value}) => <h2>This is MyHeading2 with value = {value}</h2>
const MyHeading3 = () => <h2>This is MyHeading3</h2>
const MyHeading4 = () => <h2>This is MyHeading4</h2>

export default MyHeading;

export { MyHeading2, MyHeading3, MyHeading4 };