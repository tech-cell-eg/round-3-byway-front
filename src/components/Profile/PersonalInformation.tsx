import { useScrollToTop } from '../CommonComponents/useScrollToTop';
import PersonProfile from './PersonProfile';

export default function PersonalInformation() {
  useScrollToTop();

  return (
    <>
      <div className="responsive-primary-padding-x w-full responsive-primary-padding-y">
        <div className="flex w-full max-lg:flex-wrap  ">
          <div className="w-full lg:w-1/4">
            <PersonProfile />
          </div>
          <div className="w-full lg:w-3/4 " id="content-area">
            {/*  change content on clicked button */}
          </div>
        </div>
      </div>
    </>
  );
}
