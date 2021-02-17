import TotalNotes from "../components/totalNotes/TotalNotes";

function About(props) {

    return (
        <div>
            <TotalNotes total={props.total} />
            <h1>How to Take Better Notes</h1>

            <h3>Gather your note-taking materials.</h3>
            <p>1.
            It may sound pretty basic, but it's important to have all of your
            note-taking materials organized and ready to go before the start of any class, meeting or lecture.
            </p>

            <h3>Identify the most relevant information. </h3>
            <p>2.
            Write down individual words or key phrases that are most relevant to the topic at hand -- things like dates, names, theories, definitions -- only the most important details should make the cut.
            Eliminate all the filler words and secondary details -- if you wanted those things you could read a textbook.
            </p>

            <h3>Think about what you want to retain.</h3>
            <p>Why are you taking the class? Why are you attending the seminar? Why did your employer send you to the conference? While it may be your first instinct to try to write down what you hear or see verbatim,
            you have to remember that you are taking notes in order to learn something from them -- you're not writing a novella.</p>

        </div>
    );
}

export default About;