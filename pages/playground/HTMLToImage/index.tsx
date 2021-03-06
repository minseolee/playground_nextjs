import React, { useCallback, useRef } from 'react';
import { toPng } from 'html-to-image';

const Main: React.FC = () => {
    const ref = useRef<HTMLDivElement>(null)

    const onButtonClick = useCallback(() => {
        if (ref.current === null) {
            return
        }

        toPng(ref.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = 'my-image-name.png'
                link.href = dataUrl
                link.click()
            })
            .catch((err) => {
                console.log(err)
            })
    }, [ref])

    return (
        <>
            <div ref={ref} style={{ width: '200px', height: '300px', backgroundColor: 'red', color: "white" }}>
                <div>Hello Ref</div>
            </div>
            <div>asdfasdfasdf</div>
            <button onClick={onButtonClick}>Click me</button>
        </>
    )
}

export default Main;