import React, { FC } from 'react';
import { IGenre } from "@/app/models/IGenre";  // Импорт интерфейса для жанров, если он у вас есть
import styles from './GenreBadges.module.css';  // Стили для бейджей

type GenreBadgesProps = {
    genres: IGenre[];  // Массив жанров фильма
}

const GenreBadgesComponent: FC<GenreBadgesProps> = ({ genres }) => {
    return (
        <div className={styles.genreBadges}>
            {genres.map(genre => (
                <span key={genre.id} className={styles.badge}>
          {genre.name}  {/* Показываем название жанра */}
        </span>
            ))}
        </div>
    );
};

export default GenreBadgesComponent;
