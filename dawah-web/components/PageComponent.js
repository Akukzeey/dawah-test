import {usePathname} from "next/navigation";
import { motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from "next/image";

export default function PageComponent({header,imageSrc1,header1,div1,imageSrc2,header2,div2,imageSrc3,header3}) {
    const [colRef1, inCol1] = useInView({
        triggerOnce: true,
    });
    const [colRef1B, inCol1B] = useInView({
        triggerOnce: true,
    });
    const [colRef2, inCol2] = useInView({
        triggerOnce: true,
    });
    const [colRef2B, inCol2B] = useInView({
        triggerOnce: true,
    });
    const [colRefSm, inColSm] = useInView({
        triggerOnce: true,
    });
    const [colRefSmB, inColSmB] = useInView({
        triggerOnce: true,
    });
    const [colRef3, inCol3] = useInView({
        triggerOnce: true,
    });
    const [colRef3B, inCol3B] = useInView({
        triggerOnce: true,
    });

    const pathname = usePathname();

    const formattedPathname = pathname.substring(1).split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ').toUpperCase();

    return (
        <div id='page-component'>
            <div className='page-component-hr'>
                <div className='d-flex justify-content-end'>
                    <h1 className='page-component-url'>
                        HOME / <span className='page-component-span'>{formattedPathname}</span>
                    </h1>
                </div>
            </div>
            <div className='mb-5'>
                <p className='page-component-header'>
                    {header}
                </p>
            </div>
            <div className='page-component-div  page-component-div-left'>
                <div className='row'>
                    <motion.div
                        ref={colRef1}
                        initial={{ opacity: 0, x: '-100%' }}
                        animate={inCol1 ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100%' }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className='col-lg-6 col-sm-12 mt-5'>
                        <div className='page-component-border'>
                            <h1 className='page-component-h1'>{header1}</h1>
                        </div>
                        <div className='page-component-p-tag'>{div1()}</div>
                    </motion.div>
                    <motion.div
                        ref={colRef1B}
                        initial={{ opacity: 0, x: '100%' }}
                        animate={inCol1B ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className='col-lg-6 col-sm-12'>
                        <div className='page-component-img-container'>
                        <Image src={imageSrc1} alt='image src 1' className='page-component-img' fill sizes="100vw,  100vw, 100vw"/>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='page-component-div  page-component-div-right d-lg-flex d-none'>
                <motion.div className='row' ref={colRef2} animate={inCol2 ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100%' }}>
                    <motion.div
                        ref={colRef2}
                        initial={{ opacity: 0, x: '-100%' }}
                        animate={inCol2 ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100%' }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className='col-lg-6 col-sm-12 d-flex justify-content-end'>
                        <div className='page-component-img-container'>
                        <Image src={imageSrc2} alt='image src 1' className='page-component-img' fill sizes="100vw,  100vw, 100vw"/>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={colRef2B}
                        initial={{ opacity: 0, x: '100%' }}
                        animate={inCol2B ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className='col-lg-6 col-sm-12 mt-5'>
                        <div className='page-component-border'>
                            <h1 className='page-component-h1'>{header2}</h1>
                        </div>
                        <div className='page-component-p-tag'>{div2()}</div>
                    </motion.div>
                </motion.div>
            </div>
            <div className='page-component-div  page-component-div-right d-lg-none d-md-flex'>
                <div className='row'>
                    <motion.div
                        ref={colRefSm}
                        initial={{ opacity: 0, x: '-100%' }}
                        animate={inColSm ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100%' }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className='col-lg-6 col-sm-12 mt-5'>
                        <div className='page-component-border'>
                            <h1 className='page-component-h1'>{header2}</h1>
                        </div>
                        <div className='page-component-p-tag'>{div1()}</div>
                    </motion.div>
                    <motion.div
                        ref={colRefSmB}
                        initial={{ opacity: 0, x: '100%' }}
                        animate={inColSm ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className='col-lg-6 col-sm-12 d-flex justify-content-end'>
                        <div className='page-component-img-container'>
                        <Image src={imageSrc2} alt='image src 1' className='page-component-img' fill sizes="100vw,  100vw, 100vw"/>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='page-component-div  page-component-div-left mb-3'>
                <div className='row'>
                    <motion.div
                        ref={colRef3}
                        initial={{ opacity: 0, x: '-100%' }}
                        animate={inCol3 ? { opacity: 1, x: 0 } : { opacity: 0, x: '-100%' }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className='col-lg-6 col-sm-12 mt-5'>
                        <div className='page-component-border'>
                            <h1 className='page-component-h1'>{header3}</h1>
                        </div>
                        <div className='page-component-p-tag'>{div1()}</div>
                    </motion.div>
                    <motion.div
                        ref={colRef3B}
                        initial={{ opacity: 0, x: '100%' }}
                        animate={inCol3B ? { opacity: 1, x: 0 } : { opacity: 0, x: '100%' }}
                        transition={{ duration: 1, ease: 'easeInOut' }}
                        className='col-lg-6 col-sm-12'>
                        <div className='page-component-img-container'>
                        <Image src={imageSrc3} alt='image src 1' className='page-component-img' fill sizes="100vw,  100vw, 100vw"/>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}