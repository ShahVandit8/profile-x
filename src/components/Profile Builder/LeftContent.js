import React from 'react'
import useApp from '../../Context/AppContext'
import Introduction from './Form Pages/Introduction';
import Socials from './Form Pages/Socials';
import Skills from './Form Pages/Skills';
import Badges from './Form Pages/Badges';
import Support from './Form Pages/Support';
import FinishSection from './Form Pages/Finish';

const LeftContent = () => {

    const { state } = useApp();

    return (
        <div>
            <div className="left-content">
                {
                    state.section === "introduction" ?
                        <Introduction />
                        :
                        state.section === "socials" ?
                            <Socials />
                            :
                            state.section === "skills" ?
                                <Skills />
                                :
                                state.section === "badges" ?
                                    <Badges />
                                    :
                                    state.section === "support" ?
                                        <Support />
                                        :
                                        state.section === "finish" ?
                                            <FinishSection />
                                            :
                                            <></>
                }
            </div>
        </div>
    )
}

export default LeftContent
