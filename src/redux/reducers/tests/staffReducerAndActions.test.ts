import { staffFilterForState,StaffDataForState } from '../../../test/testingData'
import {staffReducer,setStaffId,setStaffData,setInitializeStaff,setIsUpdateStaff,setUpdateStaffInitialize,setDeleteStaffInitialize,setStaffs,setInitializeStaffs,setPage,setSize,setTotal,setCreateStaffInitialize,setStaffsFilterData} from '../staffReducer'

describe('Staff reducer and actions testing', () => {
    let state = null

    beforeEach(() => {
        state = {
            staffId: null,

            staffs: null,
            initializeStaffs: false,
            page: 1,
            size: 10,
            total: 0,

            filter: {},

            staff: null,
            initializeStaff: false,

            isUpdateStaff: false,
            updateStaffInitialize: false,

            deleteStaffInitialize: false,

            createStaffInitialize: false

        }
    })

    test('setStaffId action testing', () => {
        const action = setStaffId('111')
        const newState = staffReducer(state, action)

        expect(newState.staffId).toBe('111')
    })

    test('setStaffData action testing', () => {
        const action = setStaffData(StaffDataForState)
        const newState = staffReducer(state, action)

        expect(newState.staff).toBeTruthy()
        expect(newState.staff).toStrictEqual(StaffDataForState)
    })

    describe('setInitializeStaff action testing', () => {
        test('with true', () => {
            const action = setInitializeStaff(true)
            const newState = staffReducer(state, action)

            expect(newState.initializeStaff).toBeTruthy()
        })

        test('with false', () => {
            const action = setInitializeStaff(false)
            const newState = staffReducer(state, action)

            expect(newState.initializeStaff).toBeFalsy()
        })
    })

    describe('setIsUpdateStaff action testing', () => {
        test('with true', () => {
            const action = setIsUpdateStaff(true)
            const newState = staffReducer(state, action)

            expect(newState.isUpdateStaff).toBeTruthy()
        })

        test('with false', () => {
            const action = setIsUpdateStaff(false)
            const newState = staffReducer(state, action)

            expect(newState.isUpdateStaff).toBeFalsy()
        })
    })

    describe('setUpdateStaffInitialize action testing', () => {
        test('with true', () => {
            const action = setUpdateStaffInitialize(true)
            const newState = staffReducer(state, action)

            expect(newState.updateStaffInitialize).toBeTruthy()
        })

        test('with false', () => {
            const action = setUpdateStaffInitialize(false)
            const newState = staffReducer(state, action)

            expect(newState.updateStaffInitialize).toBeFalsy()
        })
    })

    describe('setDeleteStaffInitialize action testing', () => {
        test('with true', () => {
            const action = setDeleteStaffInitialize(true)
            const newState = staffReducer(state, action)

            expect(newState.deleteStaffInitialize).toBeTruthy()
        })

        test('with false', () => {
            const action = setDeleteStaffInitialize(false)
            const newState = staffReducer(state, action)

            expect(newState.deleteStaffInitialize).toBeFalsy()
        })
    })

    test('setStaffs action testing', () => {
        const action = setStaffs([StaffDataForState])
        const newState = staffReducer(state, action)
        expect(newState.staffs.length).toBe(1)
        expect(newState.staffs).toEqual([StaffDataForState])
    })

    describe('setInitializeStaffs action testing', () => {
        test('with true', () => {
            const action = setInitializeStaffs(true)
            const newState = staffReducer(state, action)
            expect(newState.initializeStaffs).toBeTruthy()
        })

        test('with false', () => {
            const action = setInitializeStaffs(false)
            const newState = staffReducer(state, action)
            expect(newState.initializeStaffs).toBeFalsy()
        })
    })

    test('setPage action testing', () => {
        const action = setPage(5)
        const newState = staffReducer(state, action)
        expect(newState.page).toBe(5)
    })

    test('setSize action testing', () => {
        const action = setSize(50)
        const newState = staffReducer(state, action)
        expect(newState.size).toBe(50)
    })

    test('setTotal action testing', () => {
        const action = setTotal(100)
        const newState = staffReducer(state, action)
        expect(newState.total).toBe(100)
    })

    describe('setCreateStaffInitialize action testing', () => {
        test('with true', () => {
            const action = setCreateStaffInitialize(true)
            const newState = staffReducer(state, action)
            expect(newState.createStaffInitialize).toBeTruthy()
        })

        test('with false', () => {
            const action = setCreateStaffInitialize(false)
            const newState = staffReducer(state, action)
            expect(newState.createStaffInitialize).toBeFalsy()
        })
    })

    test('setStaffsFilterData action testing', () => {
        const action = setStaffsFilterData(staffFilterForState)
        const newState = staffReducer(state, action)
        expect(newState.filter).toEqual(staffFilterForState)
    })
})