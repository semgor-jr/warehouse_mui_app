import React from 'react';
import { Card, CardContent, Tooltip, Typography } from '@mui/material';
import { Product } from '../product'
import noImage from '../../assets/noFoto.png'
interface ProductCardProps {
    product: Product;
    onClick: () => void;
}


const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
    const { name, description, category, quantity, measure, image } = product;

    return (
        <Tooltip
            title={
                description.length > 50
                    ? `${description.slice(0, 47)}...`
                    : description
            }
            arrow
        >
            <Card onClick={onClick} style={{ cursor: 'pointer' }}>
                {image ? (
                    <img src={image} alt={name} style={{ width: '100%', marginBottom: '15px' }} />
                    ) : (
                    <img src={noImage} alt={product.name} style={{ width: '100%', marginBottom: '15px' }} />
                )}
                <CardContent>
                    <Typography variant="h6" noWrap>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" noWrap>
                        {category}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {quantity} {measure}
                    </Typography>
                </CardContent>
            </Card>
        </Tooltip>
    );
};

export default ProductCard;