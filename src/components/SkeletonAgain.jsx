import {Skeleton} from "antd-mobile";

const SkeletonAgain = () => {
    return <div className='skeleton-again-box'>
        <Skeleton.Title animated></Skeleton.Title>
        <Skeleton.Paragraph lineCount={5} animated></Skeleton.Paragraph>
    </div>
}

export default SkeletonAgain