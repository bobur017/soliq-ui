import React from 'react';
import styles from "./Archive.module.scss"
import ArchiveList from "./ArchiveList";
import SendArchive from "./SendArchive";
const Archive = () => {
    return (
        <div className={styles.archive}>
          <div className={styles.controls}>
              <button className={styles.active}>Алкоголь махсулотлар учун сертификатлар</button>
              <button>Алкоголь махсулотлар сертификатларини Клс га юбориш</button>
          </div>
            {/*<ArchiveList />*/}
            <SendArchive/>
        </div>
    );
};

export default Archive;
