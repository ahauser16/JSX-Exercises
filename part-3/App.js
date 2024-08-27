//part-3/App.js
function App() {
    return (
        <div>
            <Person
                name="Layla"
                age={5}
                hobbies={["digging", "howling", "cuddling"]}
            />
            <Person
                name="Charlie"
                age={3}
                hobbies={["running", "jumping", "playing"]}
            />
            <Person
                name="Arthur"
                age={40}
                hobbies={["SCUBA", "coding", "real estate"]}
            />
            <Person
                name="Alana"
                age={37}
                hobbies={["cooking", "playing piano", "singing"]}
            />
        </div>
    );
}