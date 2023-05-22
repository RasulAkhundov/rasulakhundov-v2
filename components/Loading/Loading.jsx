import LoadingStyle from '../../styles/loading.module.scss';
import Image from 'next/image';

function Loading() {
   return (
      <div className={LoadingStyle.loadingWrapper} id='loadingWrapper'>
         <div className={LoadingStyle.loadingInner}>
            <h2 id="pageLoadingText">Hello</h2>
            <div className={LoadingStyle.circleWrapper} id='loading_circle__wrapper'></div>
         </div>
      </div>
   )
}

export default Loading;