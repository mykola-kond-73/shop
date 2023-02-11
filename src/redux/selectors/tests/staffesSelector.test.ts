import {getCreateStaffInitialize,getDeleteStaffInitialize,getFilter,getInitializeStaff,getInitializeStaffs,getIsUpdateStaff,getPage,getSize,getStaffData,getStaffId,getStaffIdInit,getStaffs,getTotal,getUpdateStaffInitialize} from '../staffesSelector'
import {staffFilterForState,StaffDataForState,staffDataModForTest} from '../../../test/testingData'

describe('Staffes selectors testing', () => {
    let state = null
    beforeEach(() => {
        state = {
            staffData: {
                staffId: '618fbd8aeac16f2c6cf8e467',

                staffs: [StaffDataForState],
                initializeStaffs: true,
                page: 5,
                size: 50,
                total: 100,

                filter: staffFilterForState,

                staff: StaffDataForState,
                initializeStaff: true,

                isUpdateStaff: true,
                updateStaffInitialize: true,

                deleteStaffInitialize: true,

                createStaffInitialize: true
            }
        }
    })

    test('getStaffIdInit selectyor testing', () => {
        expect(getStaffIdInit(state)).toBe('618fbd8aeac16f2c6cf8e467')

        state.staffData = null
        expect(getStaffIdInit(state)).toBe(null)
    })

    test('getInitializeStaff selectyor testing', () => {
        expect(getInitializeStaff(state)).toBeTruthy()

        state.staffData = null
        expect(getInitializeStaff(state)).toBeFalsy()
    })

    test('getIsUpdateStaff selectyor testing', () => {
        expect(getIsUpdateStaff(state)).toBeTruthy()

        state.staffData = null
        expect(getIsUpdateStaff(state)).toBeFalsy()
    })

    test('getUpdateStaffInitialize selectyor testing', () => {
        expect(getUpdateStaffInitialize(state)).toBeTruthy()

        state.staffData = null
        expect(getUpdateStaffInitialize(state)).toBeFalsy()
    })

    test('getDeleteStaffInitialize selectyor testing', () => {
        expect(getDeleteStaffInitialize(state)).toBeTruthy()

        state.staffData = null
        expect(getDeleteStaffInitialize(state)).toBeFalsy()
    })

    test('getInitializeStaffs selectyor testing', () => {
        expect(getInitializeStaffs(state)).toBeTruthy()

        state.staffData = null
        expect(getInitializeStaffs(state)).toBeFalsy()
    })

    test('getPage selectyor testing', () => {
        expect(getPage(state)).toBe(5)

        state.staffData = null
        expect(getPage(state)).toBe(1)
    })

    test('getSize selectyor testing', () => {
        expect(getSize(state)).toBe(50)

        state.staffData = null
        expect(getSize(state)).toBe(10)
    })

    test('getTotal selector testing', () => {
        expect(getTotal(state)).toBe(100)

        state.staffData = null
        expect(getTotal(state)).toBe(0)
    })

    test('getCreateStaffInitialize selectyor testing', () => {
        expect(getCreateStaffInitialize(state)).toBeTruthy()

        state.staffData = null
        expect(getCreateStaffInitialize(state)).toBeFalsy()
    })

    describe('getFilter selectyor testing', () => {
        test('with normal data', () => {
            expect(getFilter(state)).toEqual(staffFilterForState)
        })

        test('with not normal data', () => {
            state.staffData = null
            expect(getFilter(state)).toEqual({})
        })
    })

    describe('getStaffs selector testing', () => {
        test('with normal data', () => {
            expect(getStaffs(state)).toEqual([staffDataModForTest])
        })

        test('with not normal data', () => {
            state.staffData = null
            expect(getStaffs(state)).toEqual(null)
        })
    })

    describe('getStaffData selector testing', () => {
        test('with normal data', () => {
            expect(getStaffData(state)).toEqual(StaffDataForState)
        })

        test('with not normal data', () => {
            state.staffData = null
            expect(getStaffData(state)).toEqual(null)
        })
    })

    describe('getStaffId selector testing', () => {
        test('with normal data', () => {
            expect(getStaffId(state)).toBe('6006e9e938f881278c2fd015')
        })

        test('with not normal data', () => {
            state.staffData = null
            expect(getStaffId(state)).toEqual(null)
        })
    })
})