import React from 'react'
import { useState, useEffect } from "react";

// Import CSS
import '../MatchTemplate/index.css';

// Import Components
import Sidebar from '../../_components_/Sidebar';
import Footer from '../../_components_/Footer';
import InfoTable from '../../_components_/InfoTable';

// Import Material UI Components
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

// Import Bracket
import { SingleEliminationBracket, DoubleEliminationBracket, Match, MATCH_STATES, SVGViewer } from '@g-loot/react-tournament-brackets';

// Hook
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

const DoubleElimination = () => (
    <DoubleEliminationBracket
        //   matches={matches}
        matchComponent={Match}
        svgWrapper={({ children, ...props }) => (
            <SVGViewer width={500} height={500} {...props}>
                {children}
            </SVGViewer>
        )}
    />
);

// const DoubleElimination = () => {
//     const [width, height] = useWindowSize();
//     const finalWidth = Math.max(width - 50, 500);
//     const finalHeight = Math.max(height - 100, 500);
//     return (
//         <DoubleEliminationBracket
//             matches={matches}
//             matchComponent={Match}
//             svgWrapper={({ children, ...props }) => (
//                 <SVGViewer width={finalWidth} height={finalHeight} {...props}>
//                     {children}
//                 </SVGViewer>
//             )}
//         />
//     );
// };

// const SingleElimination = () => (
//     <SingleEliminationBracket
//         matches={matches}
//         matchComponent={Match}
//         svgWrapper={({ children, ...props }) => (
//             <SVGViewer width={500} height={500} {...props}>
//                 {children}
//             </SVGViewer>
//         )}
//     />
// );

export default function index() {

    return (
        <div className='match-template'>
            {/* Sidebar */}
            <div className='sidebar'>
                <Sidebar />
            </div>

            {/* Table Info */}
            <div className='table-info'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2} minHeight={160}>
                        <Grid xs display="flex" justifyContent="center" alignItems="center">
                            <InfoTable />
                        </Grid>
                    </Grid>
                </Box>
            </div>

            {/* Bracket */}
            <div className='bracket'>
                {/* <DoubleElimination /> */}
            </div>

            {/* Footer */}
            <Footer />
        </div>
    )
}

