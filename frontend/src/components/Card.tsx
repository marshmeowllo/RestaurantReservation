'use client'
import styles from '@/components/card.module.css'
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as React from 'react';

export default function Card({hospitalName, imgSrc, onChangeRating}:{hospitalName:string, imgSrc?:string, onChangeRating?:(newValue: number | null, hospitalName: string) => void}) {
    const [value, setValue] = React.useState<number | null>(5);

    const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
        if (newValue !== null) {
            setValue(newValue);
            onChangeRating && onChangeRating(newValue, hospitalName);
        }
    };
    const handleReset=() =>{
        setValue(null);
    }


    return (
        <InteractiveCard>
            <div className={styles.card}>
                <div className={styles.cardimg}>
                   {
                    imgSrc?
                    <Image src={imgSrc}
                        alt='Hospital Picture'
                        width={250} // Set the width of the image
                        height={250} // Set the height of the image
                        layout='responsive'
                    />: null
                    }
                </div>
                <div className={styles.cardText}>{hospitalName}</div>
            
            {onChangeRating &&(<Box
                sx={{
                    '& > legend': { mt: 2 },
                }}
            >
                <Typography component="legend">Rating</Typography>
                <Rating
                    data-testid={hospitalName + " Rating"}
                    id={hospitalName + " Rating"}
                    name={hospitalName+" Rating"}
                    value={value}
                    onChange={handleRatingChange}
                />
            </Box>
            )}
        </div>
        </InteractiveCard>
    );
}
