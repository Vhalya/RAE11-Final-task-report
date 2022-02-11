import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getUser } from '../../actions/users'
import useStyles from './styles'
import { Paper, Typography, Grid, Divider, Button } from '@material-ui/core';
import { getPostsByUser, getPosts } from '../../actions/posts';
import Posts from '../Posts/Posts';
import PostDetails from '../PostDetails/PostDetails';
import store from '../../index'

const UserDetails = () => {
    console.log(store?.getState())
    
    const {user}  = useSelector((state) => state.users)
    const userId = user?._id;
    console.log(user)
    const [setCurrentId] = useState(0);
    const {posts} = useSelector((state) => state.posts )
    const dispatch = useDispatch();
    const classes = useStyles();
    const page =1;
    /*
    useEffect(() => {
        dispatch(getUser(userId));
    }, [userId, dispatch]);
    
 
    useEffect(() => {
         if (page) dispatch(getPosts(page))
     }, [page,dispatch]);
    */

    useEffect(() => {
        if (user) {
            dispatch(getPostsByUser(userId));
        }
    }, [userId, dispatch]);
    //console.log(posts)

    if (!posts || !user) return null;

    return (
        <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
            <div className={classes.card}>
                <div className={classes.section}>
                    <Typography variant="h3" component="h2">{user.name}</Typography>
                    <Typography gutterBottom variant="body1" component="p">Contact : {user.email}</Typography>
                    <Divider style={{ margin: '20px 0' }} />
                    <Divider style={{ margin: '20px 0' }} />
                    <Grid item xs={12} sm={6} md={9}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>

                </div>

            </div>
        </Paper>
    )
}

export default UserDetails
