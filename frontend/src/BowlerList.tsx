import { useEffect, useState } from "react";
import type { bowler } from "./types/bowler";

function BowlerList () {

    const [bowlers, setBowlers] = useState<bowler[]>([]);

    useEffect(() => {
        const fetchBowler = async () => {
        const response = await fetch('http://localhost:4000/Bowler');
        const data = await response.json();
        setBowlers(data);
    };
    fetchBowler();
    }, []);

    


    return(
        <>
            <h2>Bowlers</h2>
            <table>
                <thead>
                    <tr>
                        <th>Bowler Name</th>
                        <th>Team Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip</th>
                        <th>Phone Number</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bowlers.map((f) => (
                            <tr key={f.bowlerId}>
                                <td>{f.bowlerFirstName}, {f.bowlerMiddleInit}, {f.bowlerLastName}</td>
                                <td>{f.team?.teamName ?? '—'}</td>
                                <td>{f.bowlerAddress}</td>
                                <td>{f.bowlerCity}</td>
                                <td>{f.bowlerState}</td>
                                <td>{f.bowlerZip}</td>
                                <td>{f.bowlerPhoneNumber}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
}

export default BowlerList;