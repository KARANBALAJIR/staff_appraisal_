import Academic_associate from '@/app/(main)/(signin)/appraisal-form/Academic_associate';
import Services_associate from '@/app/(main)/(signin)/appraisal-form/Services_associate';
import Research_associate from './Research_associate';

interface Associate_formProps {
    pagination: number;
}

const Associate_form = (props : Associate_formProps) =>{
    const {pagination} = props;
    return(
        <>
            {
                (pagination === 1) ? <Academic_associate /> :
                    (pagination === 2) ? <Research_associate /> :
                        (pagination === 3) ? <Services_associate /> : <></>

            }
        </>
    )
}

export default Associate_form;