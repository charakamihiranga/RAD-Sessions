export function ButtonComponent() {

    const handleClick = () => {
        alert("Hello, World!");
    }

    return (
        <>
          <button onClick={handleClick}>Click me</button>
        </>
    );
}