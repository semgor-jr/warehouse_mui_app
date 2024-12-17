import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    IconButton,
    Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Product } from '../product';
import noImage from '../../assets/noFoto.png'

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
    const { name, description, category, quantity, measure, image } = product;

    return (
        <Dialog open={true} onClose={onClose} maxWidth={'md'}>
            <DialogTitle>
                {name}
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    style={{ position: 'absolute', right: 8, top: 8 }}
                >
                    <CloseIcon />
                </IconButton>
            </DialogTitle>
            <DialogContent dividers>
                {image ? (
                    <img src={image} alt={name} style={{ width: '100%', marginBottom: '15px' }} />
                    ) : (
                    <img src={noImage} alt={product.name} style={{ width: '100%', marginBottom: '15px' }} />
                )}
                <Typography variant="body2" gutterBottom>
                    {description}
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                    Категория: {category}
                </Typography>
                <Typography variant="body1" color="textSecondary" gutterBottom>
                    Количество: {quantity} {measure}
                </Typography>
            </DialogContent>
        </Dialog>
    );
};

export default ProductModal;