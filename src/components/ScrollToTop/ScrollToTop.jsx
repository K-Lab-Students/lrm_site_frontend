import React from 'react'

import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Text, Transition } from '@mantine/core';

const ScrollToTop = () => {

    const [scroll, scrollTo] = useWindowScroll();

    return (
        <div>
            <Affix position={{ left: 20, top: 400}}>
                <Transition transition="slide-up" mounted={scroll.y > 0}>
                    {(transitionStyles) => (
                        <Button
                            // leftIcon={<ArrowUpIcon />}
                            // style={transitionStyles}
                            onClick={() => scrollTo({ y: 0 })}
                        >
                            Scroll to top
                        </Button>
                    )}
                </Transition>
            </Affix>
        </div>
    )
}

export default ScrollToTop