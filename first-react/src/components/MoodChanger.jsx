import { useState } from "react";


function MoodChanger() {

    const [mood, setMood] = useState('alright');

    const handleWinLotto = () => {
        setMood('ecstatic')
    }

    const handleRunningLate = () => {
        let newMood = 'stressed'
        if (mood === 'stressed') newMood = 'Really stressed'
        else if (mood === 'Really stressed') newMood = 'giving up';

        setMood(newMood)
    }


    return (
        <div className="MoodChanger componentBox">
            Current Mood: {mood}

            <button onClick={() => setMood('tired')}>
            Stay up Late
            </button>

            <button onClick={() => setMood('hungry')}>
            Skipped lunch
            </button>

            <button onClick={() => setMood('optimistic')}>
            Got good sleep
            </button>

            <button onClick={handleRunningLate}>Running Late</button>
            <button onClick={handleWinLotto}>Win Lotto</button>
    
        </div>
    )
}

export default MoodChanger;