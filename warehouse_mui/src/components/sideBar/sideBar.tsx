import React, { useState } from 'react';
import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Checkbox,
    FormControlLabel,
    Stack,
} from '@mui/material';


interface SideBarProps {
    filters: {
        search: string;
        category: string;
        inStock: boolean;
    };
    setFilters: (filters: {
        search: string;
        category: string;
        inStock: boolean;
    }) => void;
}


const SideBar: React.FC<SideBarProps> = ({ filters, setFilters }) => {
    const [localFilters, setLocalFilters] = useState(filters);
    // const [categories, setCategories] = useState<Product[]>([]);

    // useEffect(() => {
    //     async function loadCategories() {
    //         try {
    //           const data = await import('../../data.json');
    //           const categories = [...new Set(data.map((product) => product.category))];
    //         //   setCategories(categories);
    //         } catch (error) {
    //           console.error('Error loading categories:', error);
    //         }
    //     }
    
    //     loadCategories();
    //   }, []);
    const handleApplyFilters = () => {
        setFilters(localFilters);
    };

    const handleResetFilters = () => {
        const defaultFilters = { search: '', category: '', inStock: false };
        setLocalFilters(defaultFilters);
        setFilters(defaultFilters);
    };

    return (
        <aside style={{ padding: '15px', width: '250px' }}>
            <Stack spacing={2}>
                {/* Поле поиска */}
                <TextField
                    label="Поиск"
                    variant="outlined"
                    value={localFilters.search}
                    onChange={(e) =>
                        setLocalFilters({ ...localFilters, search: e.target.value })
                    }
                    fullWidth
                />

                {/* Фильтр по наличию */}
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={localFilters.inStock}
                            onChange={(e) =>
                                setLocalFilters({
                                    ...localFilters,
                                    inStock: e.target.checked,
                                })
                            }
                        />
                    }
                    label="Только в наличии"
                />

                {/* Выпадающее меню */}
                <FormControl fullWidth>
                    <InputLabel>Категория</InputLabel>
                    <Select
                        value={localFilters.category}
                        onChange={(e) =>
                            setLocalFilters({
                                ...localFilters,
                                category: e.target.value,
                            })
                        }
                    >
                        <MenuItem value="">Все категории</MenuItem>

                        {/* Я не понимаю, как распарсить категории из json  */}
                        <MenuItem value="Классические гитары">Классические гитары</MenuItem>
                        <MenuItem value="Пианино">Пианино</MenuItem>
                        <MenuItem value="Электрогитары">Электрогитары</MenuItem>
                    </Select>
                </FormControl>

                <Stack direction="row" spacing={1}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleApplyFilters}
                    >
                        Найти
                    </Button>
                    <Button
                        variant="outlined"
                        color="secondary"
                        onClick={handleResetFilters}
                    >
                        Сбросить фильтры
                    </Button>
                </Stack>
            </Stack>
        </aside>
    );
};

export default SideBar;