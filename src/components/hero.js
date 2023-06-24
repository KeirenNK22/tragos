import React, { useState } from 'react';
import {
  Box,
  Flex,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Select,
  IconButton,
  Button,
  Stack,
} from '@chakra-ui/react';
import { FaPlane, FaUser } from 'react-icons/fa';
import { CalendarIcon } from '@chakra-ui/icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import YourSvgImage from '../assets/undraw_aircraft_re_m05i.svg';

const HeroSection = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.800');
  const textColor = useColorModeValue('gray.800', 'white');
  const [selectedTripType, setSelectedTripType] = useState('oneway');
  const [departureDate, setDepartureDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);
  const [isDepartureCalendarOpen, setDepartureCalendarOpen] = useState(false);
  const [isReturnCalendarOpen, setReturnCalendarOpen] = useState(false);

  const handleTripTypeChange = (e) => {
    setSelectedTripType(e.target.value);
  };

  const handleDepartureDateChange = (date) => {
    setDepartureDate(date);
    setDepartureCalendarOpen(false);
  };

  const handleReturnDateChange = (date) => {
    setReturnDate(date);
    setReturnCalendarOpen(false);
  };

  const handleDepartureInputClick = () => {
    setDepartureCalendarOpen(true);
  };

  const handleReturnInputClick = () => {
    setReturnCalendarOpen(true);
  };

  return (
    <Flex>
      <Box flex={0.9} display={{ base: 'none', md: 'block' }}>
        <img src={YourSvgImage} alt="Your SVG Image" style={{margin:'1rem'}}/>
      </Box>
      <Box
        bg={bgColor}
        color={textColor}
        py={10}
        px={6}
        width="100%"
        maxWidth="600px"
        mx="auto"
        mt={{ base: '2rem', md: '0' }}
      >
        <FormControl>
          <FormLabel>Select Trip Type:</FormLabel>
          <Select
            mb={4}
            value={selectedTripType}
            onChange={handleTripTypeChange}
          >
            <option value="oneway">One Way</option>
            <option value="roundtrip">Round Trip</option>
          </Select>

          {/* Departure */}
          <Stack direction="row" align="center" mb={4}>
            <Box as={FaPlane} />
            <Input
              type="text"
              placeholder="Enter City/Airport of Departure"
              flex={1}
              pr={8}
              mr={2}
            />
            
          </Stack>

          {/* Arrival */}
          <Stack direction="row" align="center" mb={4}>
            <Box as={FaPlane} />
            <Input
              type="text"
              placeholder="Enter City/Airport for Arrival"
              flex={1}
              pr={8}
              mr={2}
            />
            
          </Stack>

          {/* Departure Date */}
          {selectedTripType === 'oneway' && (
            <Stack direction="row" align="center" mb={4}>
              <IconButton
                icon={<CalendarIcon />}
                aria-label="Select Departure Date"
                onClick={handleDepartureInputClick}
              />
              <Input
                type="text"
                placeholder="Departure Date"
                value={departureDate ? departureDate.toLocaleDateString() : ''}
                onClick={handleDepartureInputClick}
                readOnly
              />
              {isDepartureCalendarOpen && (
                <DatePicker
                  selected={departureDate}
                  onChange={handleDepartureDateChange}
                  dateFormat="dd/MM/yyyy"
                  customInput={<></>}
                  inline
                />
              )}
            </Stack>
          )}

          {/* Return Date (for Round Trip) */}
          {selectedTripType === 'roundtrip' && (
            <Stack direction="row" align="center" mb={4}>
              <IconButton
                icon={<CalendarIcon />}
                aria-label="Select Departure Date"
                onClick={handleDepartureInputClick}
              />
              <Input
                type="text"
                placeholder="Departure Date"
                value={departureDate ? departureDate.toLocaleDateString() : ''}
                onClick={handleDepartureInputClick}
                readOnly
              />
              {isDepartureCalendarOpen && (
                <DatePicker
                  selected={departureDate}
                  onChange={handleDepartureDateChange}
                  dateFormat="dd/MM/yyyy"
                  customInput={<></>}
                  inline
                />
              )}

              <IconButton
                icon={<CalendarIcon />}
                aria-label="Select Return Date"
                onClick={handleReturnInputClick}
              />
              <Input
                type="text"
                placeholder="Return Date"
                value={returnDate ? returnDate.toLocaleDateString() : ''}
                onClick={handleReturnInputClick}
                readOnly
              />
              {isReturnCalendarOpen && (
                <DatePicker
                  selected={returnDate}
                  onChange={handleReturnDateChange}
                  dateFormat="dd/MM/yyyy"
                  customInput={<></>}
                  inline
                />
              )}
            </Stack>
          )}

          {/* Number of Travelers */}
          <Stack direction="row" align="center" mb={4}>
            <Box as={FaUser} />
            <Input type="number" placeholder="Number of Travelers" flex={1} />
          </Stack>

          <Button colorScheme="blue" size="lg" mt={4} width="100%">
            Find Flights
          </Button>
        </FormControl>
      </Box>
    </Flex>
  );
};

export default HeroSection;
