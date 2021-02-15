import TotalNotes from "../components/totalNotes/TotalNotes";

function About(props) {    

    return (
        <div>
            <h2></h2>
            <p>Notes is the best place to jot down quick thoughts,
            so you’ll always have your notes with you.
            Notes is a good helper to manage your schedules.
            It gives you a quick and simple notepad editing experience 
            when you write notes, memo, email, message, shopping list 
            and to do list.</p>
            <TotalNotes total={props.total} />

        </div>
    );
}

export default About;