import Icon from "@mdi/react";
import { mdiRocketLaunch } from "@mdi/js";

export default function BaseLoader() {
  return (
    <div className="fixed top-0 w-[100%] max-w-[1440px] h-[100vh] flex justify-center items-center">
      <div className="flex gap-2 text-[rgb(var(--light-theme-1))] dark:text-[rgb(var(--dark-theme-1))]">
        <Icon
          className="loader-animate"
          path={mdiRocketLaunch}
          title="Sun"
          size={1.7}
        />
        <Icon
          className="loader-animate rocket-1"
          path={mdiRocketLaunch}
          title="Sun"
          size={1.7}
        />
        <Icon
          className="loader-animate rocket-2"
          path={mdiRocketLaunch}
          title="Sun"
          size={1.7}
        />
      </div>
    </div>
  );
}
